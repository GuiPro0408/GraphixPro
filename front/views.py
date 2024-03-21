from django.shortcuts import render, redirect
from .models import ColorPalette, PaletteImage
from django.core.mail import send_mail # Import the send_mail function
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.conf import settings
from premailer import transform

def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def services(request):
    return render(request, 'services.html')

def portfolio(request):
    color_palettes = ColorPalette.objects.prefetch_related('otherImages').all()
    palettes_data = []
    directions = ['left', 'right', 'top']

    for palette in color_palettes:
        palette_data = {
            'id': palette.id,
            'name': palette.name,
            'mainImage': palette.mainImage.url,
            'otherImages': [image.image.url for image in palette.otherImages.all()],
            'direction': directions[palette.id % 3]
        }
        palettes_data.append(palette_data)
    return render(request, 'portfolio.html', {'color_palettes': palettes_data})

def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        # Construct the email subject
        email_subject = f"New contact from {name}"

        # Render the HTML email template with context
        html_content = render_to_string('contact_email_template.html', {'name': name, 'email': email, 'message': message})
        text_content = strip_tags(html_content)  # this strips the html, so people will have the text as well.

        # Create EmailMessage object
        email = EmailMessage(
            subject=email_subject,
            body=html_content,
            from_email=settings.EMAIL_HOST_USER,  # From email
            to=[email],  # To email
        )
        email.content_subtype = "html"  # this is required because we need to send HTML email
        email.send()

        # render contact page with success message
        return render(request, 'contact.html', {'success': True})

    # If not a POST request, just render the contact form page
    return render(request, 'contact.html')
