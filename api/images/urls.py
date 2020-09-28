from django.urls import path
from .views import CategoryView, ImageView

urlpatterns = [
    path('categories/', CategoryView.as_view({
        'get': 'list',
    })),
    path('categories/<int:pk>', CategoryView.as_view({
        'get': 'retrieve',
    })),
    path('images/', ImageView.as_view({
        'get': 'list',
    }))
]