from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from authentification.api.serializers import registrationSerializer
from django.contrib.auth.models import User

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh'
    ]
    
    return Response(routes)

@api_view(['POST', 'GET',])
def registration_view(request):

    if request.method == 'POST':
        serializer = registrationSerializer(data = request.data)
        data = {}
        if serializer.is_valid():
            user = serializer.save()
            data['response'] = "successfully registered a new user"
            data['username'] = user.username
        else:
            data = serializer.errors
        return Response(data)
    
    if request.method == 'GET':
        users = User.objects.all() #grabs all fighter objects
        serializer = registrationSerializer(users, many=True)
        return Response(serializer.data)
