Shader "Alphamask" {
	Properties {
		_Color ("Color", Color) = (1,1,1,1)
		_MainTex ("Color (RGB)", 2D) = "white" {}
		_Alpha("Alpha (A)", 2D) = "white" {}
	}
	 SubShader {
      Tags {"Queue"="Transparent" "RenderType"="Transparent"}
      Blend SrcAlpha OneMinusSrcAlpha
      Cull Back
      Pass {
      ZWrite On
      ColorMask 0
      }
      CGPROGRAM
	   #pragma surface surf Lambert alpha
      
      sampler2D _MainTex;
      sampler2D _Alpha;
      fixed4 _Color;

      struct Input {
          float2 uv_MainTex;
          float2 uv_Alpha;
      };

      void surf (Input IN, inout SurfaceOutput o) {
		o.Albedo = tex2D (_MainTex, IN.uv_MainTex).rgb* _Color;
		o.Alpha = tex2D(_Alpha, IN.uv_Alpha).a*_Color.a;
}
      ENDCG
}

Fallback "VertexLit"
}
