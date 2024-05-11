import requests
from PIL import Image


def open_image_from_url(image_url):
    """
    Opens an image from the given URL and displays it.

    Args:
        image_url (str): The URL of the image to open.
    """
    try:
        im = Image.open(requests.get(image_url, stream=True).raw)
        return im
    except Exception as e:
        print("Error:", e)
        return e


# Example usage
image_url = "https://firebasestorage.googleapis.com/v0/b/gdsc-bxkqqg.appspot.com/o/users%2FiHeoDWXMYIbTzsJBaw1o0D25jYP2%2Fuploads%2F1708897372419000.jpeg?alt=media&token=628da5ca-885a-48fb-84b4-a517bdd2e3ff"
open_image_from_url(image_url)



