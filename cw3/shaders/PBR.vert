#version 450 

layout( location = 0 ) in vec3 iPosition; 
layout( location = 1 ) in vec3 iNormals;
layout( location = 2 ) in vec3 iDiffuse;
layout( location = 3 ) in vec3 iSpecular; 
layout( location = 4 ) in vec3 iEmissive;
layout( location = 5 ) in vec3 iAlbedo;
layout( location = 6 ) in vec2 iShiny; 

layout( set = 0, binding = 0 ) uniform UScene 
{ 
	mat4 camera; 
	mat4 projection;
	mat4 projCam; 
	vec4 cameraPos;
	vec2 windowSize;
	
} uScene; 

layout( location = 0 ) out vec4 FragPos;
layout( location = 1 ) out vec3 fNormals;
layout( location = 2 ) out vec3 fAlbedo;
layout( location = 3 ) out vec3 fEmissive;
layout( location = 4 ) out float fShiny; 
layout( location = 5 ) out float fMetal;

void main() 
{ 
	
	fNormals = iNormals;
	fAlbedo = iAlbedo;
	fEmissive = iEmissive;
	fShiny = iShiny.x;
	fMetal = iShiny.y;
	FragPos = vec4( iPosition, 1.f ); 
	gl_Position = uScene.projCam * vec4( iPosition, 1.f ); 

}