"""dl_builder URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/

"""
from django.conf.urls import url, include
from django.contrib import admin
from backend import views

urlpatterns = [
    url(r'^$', views.HomePageView.as_view()),
    url(r'^create-slide/$' , views.create_slide),
    url(r'^new-push/$' , views.new_push),
]
