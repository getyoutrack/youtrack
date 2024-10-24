# Third party imports
from rest_framework.test import APITestCase, APIClient

# Module imports
from fixit.db.models import User
from fixit.app.views.authentication import get_tokens_for_user


class BaseAPITest(APITestCase):
    def setUp(self):
        self.client = APIClient(
            HTTP_USER_AGENT="fixit/test", REMOTE_ADDR="10.10.10.10"
        )


class AuthenticatedAPITest(BaseAPITest):
    def setUp(self):
        super().setUp()

        ## Create Dummy User
        self.email = "user@fixit.so"
        user = User.objects.create(email=self.email)
        user.set_password("user@123")
        user.save()

        # Set user
        self.user = user

        # Set Up User ID
        self.user_id = user.id

        access_token, _ = get_tokens_for_user(user)
        self.access_token = access_token

        # Set Up Authentication Token
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + access_token)
