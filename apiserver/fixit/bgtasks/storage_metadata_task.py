# Third party imports
from celery import shared_task

# Module imports
from fixit.db.models import FileAsset
from fixit.settings.storage import S3Storage
from fixit.utils.exception_logger import log_exception


@shared_task
def get_asset_object_metadata(asset_id):
    try:
        # Get the asset
        asset = FileAsset.objects.get(pk=asset_id)
        # Create an instance of the S3 storage
        storage = S3Storage()
        # Get the storage
        asset.storage_metadata = storage.get_object_metadata(
            object_name=asset.asset.name
        )
        # Save the asset
        asset.save(update_fields=["storage_metadata"])
        return
    except FileAsset.DoesNotExist:
        return
    except Exception as e:
        log_exception(e)
        return
