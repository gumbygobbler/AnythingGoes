from django.http import JsonResponse
from .models import fighter
from .models import manager
from .serializers import fighterSerializer
from .serializers import managerSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET', 'POST'])
def manager_list(request, format=None, *args, **kwargs):
    #get all the drinks
    #serialize them
    #return json
    if request.method == 'GET':
        managers = manager.objects.all() #grabs all fighter objects
        serializer = managerSerializer(managers, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = managerSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            #print("here" + serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        

@api_view(['GET', 'PUT', 'DELETE'])
def manager_detail(request, userID, format=None):

    try:
        managerData = manager.objects.get(userID = userID)
    except manager.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = managerSerializer(managerData)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = managerSerializer(managerData, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        managerData.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

@api_view(['GET', 'POST'])
def fighter_list(request, format=None, *args, **kwargs):
    #get all the drinks
    #serialize them
    #return json
    if request.method == 'GET':
        fighters = fighter.objects.all() #grabs all fighter objects
        serializer = fighterSerializer(fighters, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = fighterSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            #print("here" + serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

    # if request.method =='POST':
    #     serializer = fighterSerializer(data = request.data)
    #     if serializer.is_valid():
    #         name = serializer.data['name']
    #         manager = serializer.data['manager']
    #         fighterImg = serializer.data['fighterImg']
    #         fighter.objects.create(name = name, manager = manager, fighterImg = fighterImg)
        
    #     return JsonResponse(name)

@api_view(['GET', 'PUT', 'DELETE'])
def fighter_detail(request, id, format=None):

    try:
        fighterData = fighter.objects.get(pk=id)
    except fighter.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = fighterSerializer(fighterData)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = fighterSerializer(fighterData, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        fighterData.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)