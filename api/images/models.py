from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=255)
    image_url = models.ImageField(upload_to='category')

    def __str__(self):
        return self.name

class Image(models.Model):
    url = models.ImageField(upload_to="images")
    category = models.ForeignKey(Category, on_delete=models.RESTRICT)