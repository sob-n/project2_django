from django.shortcuts import render,redirect
from django.utils import timezone
from  .models import Community,Comment
from django.views.generic import ListView
# Create your views here.
from django.contrib.auth.decorators import login_required


from django.http import HttpResponse
#
def community(request):
    if request.method == "GET":
        content_list = Community.objects.order_by("create_date")
        comment_list = Comment.objects.order_by("create_date")
        return render(request,'community/community.html',{"content_list":content_list,"comment_list":comment_list})
    else:
        feed = Community(
            content=request.POST.get('content'),
            create_date=timezone.now(),
            author=request.user,
            # region=request.user,
            category=request.POST.get('category'))
        feed.save()
        return redirect("/community/")

def detail(request,content_id):
    content=Community.objects.get(id=content_id)
    comment_list=Comment.objects.filter(content_id=content_id)
    if request.method == "GET":
        return render(request, "community/community_detail.html", {"content": content, "comment_list": comment_list})
    else:
        comment = Comment(
            author=request.user,
            create_date=timezone.now(),
            content_id=content_id,
            comment=request.POST.get('comment'))
        comment.save()
        loc=str("/community/detail/"+str(content_id))
        return redirect(loc)

def delete(request,content_id):
    content = Community.objects.get(id=content_id)
    content.delete()
    return redirect("/community")

# def comment_edit(request,content_id,comment_id):
#     content = Community.objects.get(id=content_id)
#     comment_list = Comment.objects.filter(content_id=content_id)
#     comment_m = Comment.objects.get(id=comment_id)
#     if request.method == "GET":
#         return render(request, "community/community_detail.html",{"content": content, "comment_list": comment_list,"comment_m":comment_m})
#     else :
#         comment_m.modified_date = timezone.now()
#         comment_m.comment = request.POST.get('comment')
#         comment_m.save()
#         return redirect("/qna/detail/"+str(content_id))

