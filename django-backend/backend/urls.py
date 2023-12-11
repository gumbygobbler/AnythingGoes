"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from backend import views
from rest_framework.urlpatterns import format_suffix_patterns
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('fighters/', views.fighter_list),
    path('fighters/fights/<int:fight>', views.fighter_fight_list),
    path('fighters/<int:user_id>', views.fighter_manager_list),
    path('fighters/current-fighter/<int:user_id>', views.fighter_currentFighter),
    path('fighters/second-fighter/<int:user_id>', views.fighter_secondFighter),
    
    path('managers/', views.manager_list),
    path('managers/<int:userId>', views.manager_detail),
    
    path('fights/', views.fight_list),
    path('fights/new-fight/', views.fight_newFight),
    
    path('api/', include('authentification.api.urls')),
    path('api/user/', include('authentification.api.urls'))
]

urlpatterns = format_suffix_patterns(urlpatterns)

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)