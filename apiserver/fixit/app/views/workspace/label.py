# Third party modules
from rest_framework import status
from rest_framework.response import Response

# Module imports
from fixit.app.serializers import LabelSerializer
from fixit.app.views.base import BaseAPIView
from fixit.db.models import Label
from fixit.app.permissions import WorkspaceViewerPermission
from fixit.utils.cache import cache_response

class WorkspaceLabelsEndpoint(BaseAPIView):
    permission_classes = [
        WorkspaceViewerPermission,
    ]
    
    @cache_response(60 * 60 * 2)
    def get(self, request, slug):
        labels = Label.objects.filter(
            workspace__slug=slug,
            project__project_projectmember__member=request.user,
            project__project_projectmember__is_active=True,
            project__archived_at__isnull=True,
        )
        serializer = LabelSerializer(labels, many=True).data
        return Response(serializer, status=status.HTTP_200_OK)
