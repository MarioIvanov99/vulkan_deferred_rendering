#version 450 

layout( location = 0 ) in vec4 FragPos;
layout( location = 1 ) in vec3 fNormals;
layout( location = 2 ) in vec3 fAlbedo;
layout( location = 3 ) in vec3 fEmissive;
layout( location = 4 ) in float fShiny; 
layout( location = 5 ) in float fMetal; 

layout( set = 0, binding = 0 ) uniform UScene 
{ 
	mat4 camera; 
	mat4 projection;
	mat4 projCam; 
	vec4 cameraPos;
	vec2 windowSize;
	
} uScene; 

layout( set = 0, binding = 1 ) uniform ULight 
{ 
	vec4 light_pos[3]; 
	vec4 light_col[3];
	float numLights;
	
} uLight; 


layout( location = 0 ) out vec4 oColor; 
layout( location = 1 ) out vec4 oNormal; 
layout( location = 2 ) out vec4 oOther; 
layout( location = 3 ) out vec4 oPos; 

void main() 
{ 

	float outShiny = fShiny/200.0;
	oColor = vec4(fAlbedo, fEmissive.x);
	oNormal = vec4((fNormals+1.0)/2.0, 1.0);
	oOther = vec4(gl_FragCoord.z, outShiny, fMetal, fEmissive.z);
	oPos = vec4(FragPos.xyz, fEmissive.y);
}
