from .views import ItemView
from django.urls import path

urlpatterns = [
    path('',ItemView.as_view()),
    path('<int:pk>/',ItemView.as_view())
]