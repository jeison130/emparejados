from django.contrib import admin
from .models import Category, Image



class CategoryAdmin(admin.ModelAdmin):
    pass

class ImageAdmin(admin.ModelAdmin):
    pass

admin.site.register(Category, CategoryAdmin)
admin.site.register(Image, ImageAdmin)