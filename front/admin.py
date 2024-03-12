from django.contrib import admin
from django.utils.html import format_html
from .models import ColorPalette, PaletteImage

class PaletteImageInline(admin.TabularInline):
    model = PaletteImage
    extra = 1

    # Add a method to display image thumbnails
    def image_tag(self, obj):
        return format_html('<img src="{}" style="max-height: 100px;" />', obj.image.url)
    image_tag.short_description = 'Image'

    # Specify which fields to display in the admin interface
    fields = ('image_tag', 'image', 'color_palette')
    readonly_fields = ('image_tag',)

class ColorPaletteAdmin(admin.ModelAdmin):
    inlines = [PaletteImageInline, ]

    # Add a method to display the main image thumbnail
    def main_image_tag(self, obj):
        return format_html('<img src="{}" style="max-height: 100px;" />', obj.mainImage.url)
    main_image_tag.short_description = 'Main Image'

    # Specify which fields to display in the admin interface
    fields = ('name', 'main_image_tag', 'mainImage')
    readonly_fields = ('main_image_tag',)

admin.site.register(ColorPalette, ColorPaletteAdmin)
