from rest_framework import viewsets, pagination
from rest_framework.response import Response
from django_filters import rest_framework as filters

from .serializers import CategorySerializer, ImageSerializer
from .models import Category, Image

class CategoryView(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ImagePagination(pagination.PageNumberPagination):
    page_size = 3
    page_size_query_param = 'page_size'

class ImageView(viewsets.ReadOnlyModelViewSet):
    queryset = Image.objects.all().order_by('?')
    serializer_class = ImageSerializer
    filter_backends = [filters.DjangoFilterBackend]
    filterset_fields = ('category',)
    pagination_class = ImagePagination
