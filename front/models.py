from django.db import models
from cloudinary.models import CloudinaryField

class ColorPalette(models.Model):
    name = models.CharField(max_length=255)
    mainImage = CloudinaryField('image')

    def __str__(self):
        return self.name

class PaletteImage(models.Model):
    color_palette = models.ForeignKey(ColorPalette, related_name='otherImages', on_delete=models.CASCADE)
    image = CloudinaryField('image')

    def __str__(self):
        return f"{self.color_palette.name} Image"
