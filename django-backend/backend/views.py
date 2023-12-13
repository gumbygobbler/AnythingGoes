from django.http import JsonResponse
import random
from .models import fighter
from .models import fight
from .models import manager

from .serializers import fighterSerializer
from .serializers import fightSerializer
from .serializers import createFighterSerializer
from .serializers import managerSerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from rest_framework.parsers import JSONParser 


#----------------------------------------------------------------------------------------------
#                                   MANAGER VIEWS
#----------------------------------------------------------------------------------------------


@api_view(['GET', 'POST'])
def manager_list(request, format=None, *args, **kwargs):
    #get all the drinks
    #serialize them
    #return json
    if request.method == 'GET':
        managers = manager.objects.all() #grabs all fighter objects
        serializer = managerSerializer(managers, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    if request.method == 'POST':
        serializer = managerSerializer(data = request.data)
        if serializer.is_valid():
            try:
                serializer.save()
                context = {'data': serializer.data}
                return Response(context, status=status.HTTP_201_CREATED)
            except:
                return Response({'error': 'Something went wrong'})

@api_view(['GET', 'PUT', 'DELETE'])
def manager_detail(request, userId, format=None):

    try:
        managerData = manager.objects.get(userId = userId)
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


#----------------------------------------------------------------------------------------------
#                                   FIGHT VIEWS
#----------------------------------------------------------------------------------------------


@api_view(['GET'])
def fight_list(request, *args, **kwargs):
    if request.method == 'GET':
        fightData = fight.objects.all()
        serializer = fightSerializer(fightData, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
            
@api_view(['GET', 'POST'])
def fight_newFight(request, format=None, *args, **kwargs):
    if request.method == 'GET':
        fightData = fight.objects.all()
        mostRecentFight = fightData.order_by('id').last()
        serializer = fightSerializer(mostRecentFight)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = fightSerializer(data = request.data)
        if serializer.is_valid():
            try:
                serializer.save()
                context = {'data': serializer.data}
                return Response(context, status=status.HTTP_201_CREATED) 
            except:
                return Response({'error': 'Something went wrong'})
    
@api_view(['GET', 'PUT', 'DELETE'])
def fight_detail(request, fightId, format=None):

    try:
        fightData = fight.objects.get(pk=id)
    except fight.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = fightSerializer(fightData)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = fightSerializer(fightData, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        fightData.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

#----------------------------------------------------------------------------------------------
#                                   FIGHTER VIEWS
#----------------------------------------------------------------------------------------------


@api_view(['GET'])
def fighter_list(request):
    if request.method == 'GET':
        fighters = fighter.objects.all()
        serializer = fighterSerializer(fighters, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    if request.method == 'POST':
        serializer = fightSerializer(data = request.data)
        if serializer.is_valid():
            try:
                serializer.save()
                context = {'data': serializer.data}
                return Response(context, status=status.HTTP_201_CREATED)
            except:
                return Response({'error': 'Something went wrong'})

@api_view(['GET', 'POST'])
def fighter_manager_list(request, user_id, format=None, *args, **kwargs):
    #get all the drinks
    #serialize them
    #return json
    if request.method == 'GET':
        #user_id = request.query_params.get('userID', None)
        managerData = manager.objects.get(userId = user_id)
        fighters = fighter.objects.filter(manager = managerData.pk) #grabs all fighter objects for one manager
        serializer = fighterSerializer(fighters, many=True)
        for data in serializer.data:
            data['fighterImg'] = request.build_absolute_uri(data['fighterImg'])
        return Response(serializer.data, status=status.HTTP_200_OK)
            
    if request.method == 'POST':
        serializer = createFighterSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            context = {'data': serializer.data}
            return Response(context, status=status.HTTP_201_CREATED)
        
@api_view(['GET'])
def fighter_fight_list(request, fight, format=None, *args, **kwargs):
    #get all the drinks
    #serialize them
    #return json
    if request.method == 'GET':
        #user_id = request.query_params.get('userID', None)
        fighters = fighter.objects.filter(fight = fight)
        serializer = fighterSerializer(fighters, many=True)
        for data in serializer.data:
            data['fighterImg'] = request.build_absolute_uri(data['fighterImg'])
        return Response(serializer.data, status=status.HTTP_200_OK)
    
@api_view(['GET'])
def fighter_currentFighter(request, user_id, format=None, *args, **kwargs):
    idleFighter = fighter.objects.filter(fight = 5)
    idleFighterCurrentManager = idleFighter.filter(manager = (user_id+1))
    currentFighter = idleFighterCurrentManager.order_by('id').last()
    serializer = fighterSerializer(currentFighter)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def fighter_secondFighter(request, user_id, format=None, *args, **kwargs):
    idleFighter = fighter.objects.filter(fight = 5)
    idleFighterOtherManagers = idleFighter.exclude(manager = (user_id + 1))
    secondFighter = random.choice(idleFighterOtherManagers)
    serializer = fighterSerializer(secondFighter)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['PUT'])
def fighter_update(request, id, format=None, *args, **kwargs):
    
    if request.method == 'PUT':
        instance = fighter.objects.get(pk = id)
        newData = JSONParser().parse(request)
        
        serializer = fighterSerializer(instance, newData)
        if serializer.is_valid():
            serializer.save()
            context = {'data': serializer.data}
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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
    
