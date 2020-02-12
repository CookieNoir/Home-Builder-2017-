Shader "AlphamaskCutOut" {
	Properties {
		_Color ("Color", Color) = (1,1,1,1)
		_MainTex ("Color (RGB)", 2D) = "white" {}
		_Alpha("Alpha (A)", 2D) = "white" {}
		_Cutoff ("Alpha cutoff", Range(0,1)) = 0.5
	}
	 SubShader {
      Tags {"Queue"="Transparent" "IgnoreProjector"="True" "RenderType"="Transparent"}
      Blend SrcAlpha OneMinusSrcAlpha
      Cull Back
      CGPROGRAM
	   #pragma surface surf Lambert alpha
      
      sampler2D _MainTex;
      sampler2D _Alpha;
      fixed4 _Color;
      float _Cutoff;

      struct Input {
          float2 uv_MainTex;
          float2 uv_Alpha;
      };

      void surf (Input IN, inout SurfaceOutput o) {
		fixed4 c = tex2D (_MainTex, IN.uv_MainTex)* _Color;
		float ca = tex2D(_Alpha, IN.uv_Alpha).a;
		o.Albedo = c.rgb;

		if (ca > _Cutoff)
       o.Alpha = c.a;
     else
       o.Alpha = 0;
 }

      ENDCG
}

Fallback "Transparent/Cutout/Diffuse"
}
