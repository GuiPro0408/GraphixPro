from django.shortcuts import render, redirect
from .models import ColorPalette, PaletteImage
from cloudinary.uploader import upload

# urlpatterns = [
#     path('', views.index, name='index'),
#     path('about/', views.about, name='about'),
#     path('services/', views.services, name='services'),
#     path('portfolio/', views.portfolio, name='portfolio'),
#     path('contact/', views.contact, name='contact'),
# ]

# Create your views here.
def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def services(request):
    return render(request, 'services.html')

def portfolio(request):
    color_palettes = ColorPalette.objects.prefetch_related('otherImages').all()
    palettes_data = []
    for palette in color_palettes:
        palette_data = {
            'id': palette.id,
            'name': palette.name,
            'mainImage': palette.mainImage.url,
            'otherImages': [image.image.url for image in palette.otherImages.all()]
        }
        palettes_data.append(palette_data)
    return render(request, 'portfolio.html', {'color_palettes': palettes_data})

def contact(request):
    return render(request, 'contact.html')
