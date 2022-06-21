from django.urls import path
from . import views
from django.contrib.auth import views as auth_view

app_name="community"

urlpatterns = [
    path("", views.community, name="content_list"),
    # path("detail/<int:content_id>/<int:comment_id>", views.comment_edit, name="comment_editor"),
    path("detail/<int:content_id>",views.detail,name="content_detail"),
    path("detail/delete/<int:content_id>",views.delete,name="content_delete"),
]
