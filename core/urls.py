from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('features/', views.features, name='features'),
    path('pricing/', views.pricing, name='pricing'),
    path('solutions/', views.solutions, name='solutions'),
    path('contact/', views.contact, name='contact'),

    path('login/', views.login_view, name='login'),
    path('signup/', views.signup_view, name='signup'),
    path('logout/', views.logout_view, name='logout'),
    path('demo/', views.demo, name='demo'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('pay/', views.create_payment, name='pay'),
    path("schedule-meeting/", views.schedule_meeting, name="schedule_meeting"),
]
