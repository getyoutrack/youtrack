import os
from celery import Celery
from fixit.settings.redis import redis_instance
from celery.schedules import crontab

# Set the default Django settings module for the 'celery' program.
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "fixit.settings.production")

ri = redis_instance()

app = Celery("fixit")

# Using a string here means the worker will not have to
# pickle the object when using Windows.
app.config_from_object("django.conf:settings", namespace="CELERY")

app.conf.beat_schedule = {
    # Executes every day at 12 AM
    "check-every-day-to-archive-and-close": {
        "task": "fixit.bgtasks.issue_automation_task.archive_and_close_old_issues",
        "schedule": crontab(hour=0, minute=0),
    },
    "check-every-day-to-delete_exporter_history": {
        "task": "fixit.bgtasks.exporter_expired_task.delete_old_s3_link",
        "schedule": crontab(hour=0, minute=0),
    },
    "check-every-day-to-delete-file-asset": {
        "task": "fixit.bgtasks.file_asset_task.delete_unuploaded_file_asset",
        "schedule": crontab(hour=0, minute=0),
    },
    "check-every-five-minutes-to-send-email-notifications": {
        "task": "fixit.bgtasks.email_notification_task.stack_email_notification",
        "schedule": crontab(minute="*/5"),
    },
    "check-every-day-to-delete-hard-delete": {
        "task": "fixit.bgtasks.deletion_task.hard_delete",
        "schedule": crontab(hour=0, minute=0),
    },
    "check-every-day-to-delete-api-logs": {
        "task": "fixit.bgtasks.api_logs_task.delete_api_logs",
        "schedule": crontab(hour=0, minute=0),
    },
    "run-every-6-hours-for-instance-trace": {
        "task": "fixit.license.bgtasks.tracer.instance_traces",
        "schedule": crontab(hour="*/6"),
    },
}

# Load task modules from all registered Django app configs.
app.autodiscover_tasks()

app.conf.beat_scheduler = "django_celery_beat.schedulers.DatabaseScheduler"
