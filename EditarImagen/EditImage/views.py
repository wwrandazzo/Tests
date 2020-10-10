from django.shortcuts import render
from django.views.generic.base import TemplateView
# Create your views here.

class HomePageView(TemplateView):
    template_name = "EditImage/ImageSelectCanva.html"
    
    def get(self,request,*args,**kwargs):
        return render(request, self.template_name, {'title':"Imagen"})