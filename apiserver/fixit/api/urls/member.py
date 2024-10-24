from django.urls import path

from fixit.api.views import (
    ProjectMemberAPIEndpoint,
)

urlpatterns = [
    path(
        "workspaces/<str:slug>/projects/<str:project_id>/members/",
        ProjectMemberAPIEndpoint.as_view(),
        name="users",
    ),
]
