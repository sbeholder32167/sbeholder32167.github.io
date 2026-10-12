var store = [{
        "title": "Lab 소개",
        "excerpt":"이 카테고리는 실무에 이용할 수준이 아닌, 아이디어 수준의 저작물 또는 실무 포트폴리오에 사용되는 모듈 제작등의 소개에 사용됩니다. 제가 관심있는 분야에 대한 기술들이 사용될 예정입니다. 현재 관심있는 기술은 두가지가 있습니다. 바로 JNI와 LLM입니다. JNI의 경우, Android NDK Beginners Guide 등의 관련 도서를 접하고 예제 코드를 Cmake로 바꿔 빌드해가며 지속적으로 관심을 가졌던...","categories": [],
        "tags": [],
        "url": "/labs/2026-08-29-lab-test/",
        "teaser": null
      },{
        "title": "OIDC Template Code-Client 소개",
        "excerpt":"Spring Security OAuth2 Client를 적용하기 어렵다고 Keycloak 연동을 포기하지 마세요 제목 그대로 OIDC (Open ID Connect) 연동을 위한 Client용 Template Code입니다. Keycloak, Google과 같은 IDP (Identity Provider)에 Legacy Spring 또는 Legacy 전자정부 Framework Application을 연동할수 있게 해주는 Template Code입니다. 기존 인증 체계에 대한 영향과 기존 코드에 대한 침습을 최소화하고자, Template...","categories": [],
        "tags": [],
        "url": "/products/oidc_template_code/2026-08-30-product-oidc-template-code-client/",
        "teaser": null
      },{
        "title": "OIDC Template Code-Client 개선사항",
        "excerpt":"코드 개선 사항(2026-09-06) 안녕하세요. 코드 개선에 따른 변경사항을 알려드립니다. 이용 시 참조하시기 바랍니다. 변경 사항 1. Discovery URI를 이용하여 OIDC 인증에 사용되는 각종 Endpoint를 읽어 동작하도록 개선된 Class를 제작하였습니다. OIDCConfig Class 대신, KeycloakConfig, GoogleConfig, NaverConfig를 사용하실 수 있습니다. 기존 OIDCConfig처럼 각종 Endpoint를 수동으로 입력한 Bean을 사용하셔도 무방합니다. 사용 편의성 측면의...","categories": [],
        "tags": [],
        "url": "/products/oidc_template_code/2026-09-06-product-oidc-template-code-client/",
        "teaser": null
      },{
        "title": "OIDC Template Code-Client 개선사항",
        "excerpt":"코드 개선 사항(2026-10-10) 안녕하세요. 코드 개선에 따른 변경사항을 알려드립니다. 이용 시 참조하시기 바랍니다. 변경 사항 1. Kakao 소셜 로그인 Provider를 작성하였습니다. 카카오 디벨로퍼스에서 앱을 등록하고, Redirect URI 및 Logout URI등을 설정하신 후, 로그인을 하실 수 있습니다. Google / Naver Provider를 적용할 때와 마찬가지로, OIDCConfig, OIDCProvider, ClientAuthConvertAdapter 구현 Class만 바꾸면 Kakao...","categories": [],
        "tags": [],
        "url": "/products/oidc_template_code/2026-10-10-product-oidc-template-code-client/",
        "teaser": null
      },{
        "title": "OIDC Template Code-Client 개선사항",
        "excerpt":"코드 개선 사항 (2026-10-11) 안녕하세요. 코드 개선에 따른 변경사항을 알려드립니다. 이용 시 참조하시기 바랍니다. 변경 사항 1. Access Token 검증 로직을 추가하였습니다. ID Token은 Google, Naver, Kakao 모두 Keycloak과 마찬가지로 JWT 를 사용하고 있습니다. 그래서 검증 로직도 동일하게 적용할수 있었습니다. 그러나, Access Token의 경우, Google, Naver, Kakao 모두 Opaque Token을...","categories": [],
        "tags": [],
        "url": "/products/oidc_template_code/2026-10-11-product-oidc-template-code-client/",
        "teaser": null
      },{
        "title": "Github Pages를 오픈했습니다",
        "excerpt":"Github Pages도 처음이고, Jekyll도 처음이다 보니 엉성한 부분이 많습니다 하지만 지금까지 누구나 쉽게 사용할수 있었던 채널들보다는 달리 새로운 방법을 이용하고 싶었습니다 다른 사람들과 뭔가 차별점도 보이고 싶었습니다 이렇게 작성하고 보니 용도 측면에서는 만족스럽습니다 약간 까다롭다는 생각도 들지만 오히려 각 페이지에 대한 커스터마이징의 한계가 거의 없으니, 자유로움 측면에서는 포털 사이트 블로그들에...","categories": [],
        "tags": [],
        "url": "/posts/2026-08-30-posts-test/",
        "teaser": null
      },{
        "title": "인가 기능을 이용한 RBAC",
        "excerpt":"위 제목의 이름으로 시연 영상을 준비중입니다. 제목 그대로, 이전의 Code 구현을 이용하여 Keycloak Role에 따라 Client의 권한을 지정하고 동작시키는 방식이 아니고, Keycloak의 인가 기능 중 역할 기반 정책(Role Based Policy)만을 이용하여 접근을 통제하는 방식입니다. Client(Legacy Application)의 권한을 고려하지 않고, 어떤 Resource에 접근하려는 사용자가 접근하기에 충분한 Role을 보유하고 있는지를 보고 접근...","categories": [],
        "tags": [],
        "url": "/posts/2026-09-14-posts-progress/",
        "teaser": null
      },{
        "title": "인가 기능을 이용한 RBAC 영상",
        "excerpt":"Keycloak의 인가 기능을 이용한 Legacy 전자정부 프레임워크 실행환경 통합예제 RBAC 연동 시연 영상 영상 녹화한지 일주일이 지난 어제야 업로드를 완료했습니다. 더 보기 설명란에도 약간 언급했습니다만, 제가 작성한 OIDC Template Code-Authz는 Keycloak-policy-enforcer와 기능이 매우 유사합니다. 누가보면 오픈소스 코드 긁어다가 약간 수정하여 만든줄 알수도 있겠다 싶었습니다. 하지만 저는 지금까지 Keycloak-policy-enforcer 패키지를 사용해본...","categories": [],
        "tags": [],
        "url": "/posts/2026-10-01-posts-progress/",
        "teaser": null
      },{
        "title": "Scope에 대한 고민",
        "excerpt":"얼마전에 업로드한 \"Keycloak 인가 기능을 이용한 RBAC\" 시연 영상에서는, Resource만을 대상으로 인가 기능을 시연했습니다. Resource에 연결된 Scope에 대해서는 시연을 하지 않았습니다. Scope를 쓸줄 몰라서 쓰지 않았다기 보다는, Scope를 어떻게 적용해야 인가 기능을 제공함에 있어서 가장 적절한지를 판단하지 못했습니다. 아래의 예시를 들어 설명드릴까 합니다. 첫번째로, Resource와 그에 따른 기능들을 Scope로 연결하고...","categories": [],
        "tags": [],
        "url": "/posts/2026-10-05-posts-discuss_scopes/",
        "teaser": null
      },{
        "title": "Keycloak 인가 기능을 이용한 심층 방어?",
        "excerpt":"제목만 보면 매우 거창하게 생각될수 있습니다. 하지만, 한번의 사용자 요청에 \"인가 질의가 여러번 진행되고 여러번 검증된다\"고 해석할수 있습니다. RPT Cache는 필수적이 되겠네요. 현재 \"Keycloak 인가 기능을 이용한 Scope 기반 접근 제어\" 시연 영상을 준비하고 있습니다. 원래는 ABAC에 대한 시연 영상을 생각했었습니다만, Scope의 사용 시연이 더 먼저라고 생각됩니다. 이 Scope와, 각...","categories": [],
        "tags": [],
        "url": "/posts/2026-10-12-posts-progres/",
        "teaser": null
      },{
        "title": "Secret Note 소개",
        "excerpt":"사용하시는 패스워드가 너무많아 자꾸 잊어버리거나 기억하기 힘들어서 두통으로 고생하신다면, 이 앱이 해결책이 될수 있습니다. Secret Note 다양한 서비스를 이용하기 위해, 다양한 사이트에 인증을 해야하고, 그로 인하여 수많은 패스워드들을 사용하기위해 기억해야 하는 시대입니다. 이런 문제로 인하여 많은 사람들은 동일하거나 비슷한 패턴을 가진 패스워드들을 여러 사이트에 걸쳐 사용하고 있기도 하구요, 특정 메모장등에...","categories": [],
        "tags": [],
        "url": "/products/secret_note/2026-08-29-product-secretnote/",
        "teaser": null
      }]
