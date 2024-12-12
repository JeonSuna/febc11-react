import Image from 'next/image';

export default function Home() {
  return (
    <main class="container mx-auto mt-10 p-4 transition-color">
      <section class="text-center">
        <h1 class="text-4xl font-bold mb-4">멋사컴에 오신 것을 환영합니다!</h1>
        <p class="text-xl mb-6">
          다양한 주제의 커뮤니티와 활발한 소통을 위한 플랫폼입니다. 관심사에
          따라 참여하고, 의견을 나누세요.
        </p>
        <a
          href="/"
          class="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600"
        >
          커뮤니티 참여하기
        </a>
      </section>

      <section class="mt-16">
        <h2 class="text-2xl font-bold mb-4 text-center">주요 기능</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded shadow dark:bg-gray-800">
            <h3 class="text-xl font-bold mb-2">정보 공유</h3>
            <p class="mb-4">다양한 정보와 지식을 공유하세요.</p>
            <a href="/info" class="text-orange-500 hover:underline">
              바로가기
            </a>
          </div>
          <div class="bg-white p-6 rounded shadow dark:bg-gray-800">
            <h3 class="text-xl font-bold mb-2">자유 게시판</h3>
            <p class="mb-4">자유롭게 이야기를 나누세요.</p>
            <a href="/free" class="text-orange-500 hover:underline">
              바로가기
            </a>
          </div>
          <div class="bg-white p-6 rounded shadow dark:bg-gray-800">
            <h3 class="text-xl font-bold mb-2">질문 게시판</h3>
            <p class="mb-4">궁금한 점을 질문하고 답변을 받아보세요.</p>
            <a href="/qna" class="text-orange-500 hover:underline">
              바로가기
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
