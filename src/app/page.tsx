"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [copyEmailSuccess, setCopyEmailSuccess] = useState(false);
  const [copyTemplateSuccess, setCopyTemplateSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState("intro");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const email = "qkrwodud30@naver.com";
  
  const partnershipTemplate = `[EM베스트 제휴 문의]

회사/브랜드명: 
담당자명: 
연락처: 
이메일: 
제휴 제안 내용:

귀사의 제품/서비스에 대한 간략한 소개:

희망하는 제휴 형태(선택):
□ 제품 리뷰/홍보
□ 공동 이벤트/프로모션
□ 스폰서십
□ 기타 (상세 기재):

기대 효과:

추가 문의사항:

감사합니다.`;

  const copyToClipboard = (text: string, setSuccess: React.Dispatch<React.SetStateAction<boolean>>, timeout: number = 2000) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setSuccess(true);
        setTimeout(() => setSuccess(false), timeout);
      })
      .catch(err => {
        console.error('클립보드 복사 실패:', err);
      });
  };

  const tabOptions = [
    { id: "intro", label: "소개" },
    { id: "events", label: "이벤트 및 체험단" },
    { id: "community", label: "커뮤니티 활동" },
    { id: "reviews", label: "리뷰와 정보" },
    { id: "partners", label: "협력 업체" },
    { id: "marketplace", label: "회원 장터" }
  ];

  const getActiveTabLabel = () => {
    const activeOption = tabOptions.find(option => option.id === activeTab);
    return activeOption ? activeOption.label : "소개";
  };

  const renderTabContent = () => {
    switch(activeTab) {
      case "intro":
        return (
          <div className="p-6 md:p-8 border-b">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">EM베스트 소개</h2>
            <p className="text-gray-600 mb-4">
              EM베스트는 FPS 장비를 다루는 네이버 공식 카페이자 대한민국 최대 규모의 FPS 장비 커뮤니티입니다. 
              다양한 FPS 게임 장비에 대한 전문적인 정보와 리뷰를 제공하며, 
              열정적인 게이머들이 모여 정보를 공유하고 소통하는 공간입니다.
            </p>
            <p className="text-gray-600 mb-4">
              게이밍 커뮤니티의 중심지로서 게이머들이 모여 열정을 공유하고 지식을 쌓을 수 있는 특별한 공간입니다. 
              다양한 이벤트와 체험단을 통해 회원들은 최신 게이밍 기기를 직접 체험하고 리뷰를 작성하는 기회를 얻을 수 있습니다.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <div className="flex-1 bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">커뮤니티 규모</h3>
                <p className="text-gray-600">대한민국 최대 FPS 장비 커뮤니티</p>
              </div>
              <div className="flex-1 bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">공식 인증</h3>
                <p className="text-gray-600">네이버 공식 카페</p>
              </div>
              <div className="flex-1 bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">전문성</h3>
                <p className="text-gray-600">FPS 장비 전문 리뷰 및 정보 제공</p>
              </div>
            </div>
          </div>
        );
      case "events":
        return (
          <div className="p-6 md:p-8 border-b">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">다양한 이벤트 및 체험단</h2>
            <p className="text-gray-600 mb-4">
              EM베스트 카페에서는 회원들을 위한 다양한 이벤트와 체험단 활동이 펼쳐집니다. 
              카페 자체에서 주최하는 이벤트부터 협력 업체들이 제공하는 체험단까지 다양한 참여 기회가 주어집니다.
            </p>
            <p className="text-gray-600 mb-4">
              특히 협력 업체들의 체험단은 카페 회원들에게 인기입니다. 신규 제품을 실제로 사용해볼 수 있는 
              특별한 경험을 제공하며, 체험 후 작성한 리뷰를 통해 다른 회원들과 솔직한 경험을 공유할 수 있습니다.
            </p>
            <p className="text-gray-600 mb-4">
              이러한 체험단은 마우스, 키보드, 헤드셋 등의 게이밍 기기뿐만 아니라 모니터와 같은 하드웨어에서도 진행됩니다. 
              참여자들은 신제품을 실제 사용하며 직접적인 피드백을 제공함으로써 해당 업체의 제품 개선에 기여하기도 합니다.
            </p>
          </div>
        );
      case "community":
        return (
          <div className="p-6 md:p-8 border-b">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">활발한 커뮤니티 활동</h2>
            <p className="text-gray-600 mb-4">
              EM베스트 카페는 게이밍 커뮤니티의 중심지로서 활발한 소통과 정보를 나누는 곳입니다. 
              이곳에서 활동하는 회원들은 컴퓨터 하드웨어에 대한 지식이 풍부한 전문가부터 
              막 입문한 초보자까지 다양한 수준을 갖추고 있습니다.
            </p>
            <p className="text-gray-600 mb-4">
              질문과 답변 코너에서는 하드웨어 및 소프트웨어와 관련된 다양한 궁금증을 쉽게 해소할 수 있습니다. 
              최신 그래픽 카드의 성능 비교부터 각종 게임의 사양 문의, 혹은 간단한 PC 조립에 대한 조언까지 
              모든 질문이 환영됩니다.
            </p>
            <p className="text-gray-600 mb-4">
              PC 견적 게시판은 새로운 컴퓨터를 구입하려는 사람들에게 매우 유용한 정보를 제공합니다. 
              여기서는 예산, 용도, 선호하는 브랜드 등을 기반으로 적절한 조합을 추천받을 수 있습니다.
            </p>
          </div>
        );
      case "reviews":
        return (
          <div className="p-6 md:p-8 border-b">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">풍부한 리뷰와 정보</h2>
            <p className="text-gray-600 mb-4">
              EM베스트 카페는 풍부한 리뷰와 정보를 제공하는 독보적인 공간입니다. 
              카페에 참여하는 회원들은 게이밍 하드웨어에 대한 광범위한 지식을 갖추고 있으며, 
              이를 바탕으로 다양한 제품에 대한 리뷰를 작성하고 있습니다.
            </p>
            <p className="text-gray-600 mb-4">
              키보드, 마우스, 헤드셋 등 다양한 게이밍 기기의 리뷰는 단순히 제품의 기능과 특징을 나열하는 것이 아니라, 
              각 제품이 실제 사용 환경에서 어떤 성능을 발휘하는지에 대한 자세한 피드백을 제공합니다.
            </p>
            <p className="text-gray-600 mb-4">
              모니터와 같은 하드웨어 리뷰는 게이밍 환경을 최적화하려는 사용자들에게 매우 중요합니다. 
              모니터의 해상도, 주사율, 응답 시간 등은 게이밍 경험을 크게 좌우하는 요소입니다.
            </p>
          </div>
        );
      case "partners":
        return (
          <div className="p-6 md:p-8 border-b">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">다양한 협력 업체</h2>
            <p className="text-gray-600 mb-4">
              EM베스트 카페는 다양한 협력 업체들과 긴밀하게 협력하여 회원들에게 최신 제품 정보와 
              혜택을 제공하고 있습니다. 이들 업체는 글로벌 브랜드부터 국내 유명 업체까지 다양하게 포진되어 있습니다.
            </p>
            <p className="text-gray-600 mb-4">
              이를 통해 카페 회원들은 최신 게이밍 기기의 정보를 빠르게 얻을 수 있을 뿐만 아니라, 
              협력 업체들의 이벤트와 체험단을 통해 다양한 제품을 직접 체험할 기회도 누릴 수 있습니다.
            </p>
            <p className="text-gray-600 mb-4">
              이러한 협력 관계는 EM베스트 카페가 게이밍 커뮤니티의 중심지로 자리 잡는 데 
              중요한 역할을 하고 있으며, 회원들에게 폭넓은 정보와 기회를 제공하는 기반이 되고 있습니다.
            </p>
          </div>
        );
      case "marketplace":
        return (
          <div className="p-6 md:p-8 border-b">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">회원 장터</h2>
            <p className="text-gray-600 mb-4">
              카페의 중고거래 게시판은 신뢰도 높은 회원들 사이에서 원활한 거래가 이루어집니다. 
              회원들은 자신이 더 이상 사용하지 않는 게이밍 기기나 컴퓨터 부품 등을 올려 
              다른 회원들에게 저렴한 가격으로 판매하고 있습니다.
            </p>
            <p className="text-gray-600 mb-4">
              이곳에서는 간혹 헐값에 좋은 제품을 올리는 유저들이 나타나기도 하는데, 
              이는 게이밍 커뮤니티의 일원으로서 서로를 돕고자 하는 마음에서 비롯됩니다.
            </p>
            <p className="text-gray-600 mb-4">
              중고거래 게시판에서 거래되는 제품들은 마우스, 키보드, 헤드셋 등 게이밍 기기부터 
              모니터, 그래픽 카드, CPU와 같은 주요 하드웨어까지 다양합니다.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* 헤더 */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">EM베스트 제휴문의</h1>
          <div className="hidden md:block">
            <p className="text-gray-600 text-sm">FPS 장비 전문 커뮤니티</p>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="flex-grow container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {/* 탭 네비게이션 - 모바일 */}
          <div className="md:hidden bg-gray-100 border-b">
            <div className="relative">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-800"
              >
                <span>{getActiveTabLabel()}</span>
                <svg 
                  className={`w-5 h-5 transition-transform ${isMenuOpen ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-10">
                  {tabOptions.map(option => (
                    <button
                      key={option.id}
                      onClick={() => {
                        setActiveTab(option.id);
                        setIsMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-sm font-medium ${activeTab === option.id ? 'bg-gray-100 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* 탭 네비게이션 - 데스크톱 */}
          <div className="hidden md:block bg-gray-100 border-b">
            <div className="flex">
              {tabOptions.map(option => (
                <button 
                  key={option.id}
                  onClick={() => setActiveTab(option.id)}
                  className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${activeTab === option.id ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* 탭 콘텐츠 */}
          {renderTabContent()}

          {/* 제휴문의 섹션 */}
          <div className="p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">제휴 문의</h2>
            <p className="text-gray-600 mb-6">
              EM베스트와의 제휴를 통해 귀사의 제품이나 서비스를 FPS 게임을 즐기는 
              열정적인 게이머들에게 효과적으로 알릴 수 있습니다. 
              아래 이메일로 제휴 문의를 보내주시면 검토 후 연락드리겠습니다.
            </p>

            {/* 이메일 복사 섹션 */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">제휴 문의 이메일</h3>
                  <p className="text-blue-600 font-medium">{email}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(email, setCopyEmailSuccess)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
                >
                  {copyEmailSuccess ? "복사 완료!" : "이메일 복사하기"}
                </button>
              </div>
            </div>

            {/* 제휴문의 양식 섹션 */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">제휴 문의 양식</h3>
                  <p className="text-gray-600 text-sm">
                    아래 버튼을 클릭하여 기본 제휴 문의 양식을 복사하고, 이메일에 붙여넣기 하세요.
                  </p>
                </div>
                <button
                  onClick={() => copyToClipboard(partnershipTemplate, setCopyTemplateSuccess)}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors"
                >
                  {copyTemplateSuccess ? "복사 완료!" : "제휴 문의 양식 복사하기"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">EM베스트 제휴문의</h2>
              <p className="text-gray-300 text-sm mt-1">FPS 장비 전문 커뮤니티</p>
            </div>
            <div className="text-gray-300 text-sm">
              <p> 2025 EM베스트. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
