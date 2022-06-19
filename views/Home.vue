<template>
  <div>

    <!-- banner -->
    <div class="swiper mySwiper mb-3">
      <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../assets/banner2.jpg" id="bannerImg">
          </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>	
    </div>
    <!-- // banner -->

    <!-- favoriteProd (banner)-->
    <div class="mb-5">
      <h2>{{ favoriteProd }}</h2>
      <div class="swiper-container">
        <b-container>
          <b-row>
            <b-col>
              <div class="prod-box">
                <img src="../assets/prod1.jpg" width="100%">
                <div>
                  펌프 모드 30서빙
                </div>
                <div>
                  <h4 class="text-primary">19,380원</h4>
                </div>
              </div>
            </b-col>
            <b-col>
              <div class="prod-box">
                <img src="../assets/prod1.jpg" width="100%">
                <div>
                  펌프 모드 30서빙
                </div>
                <div>
                  <h4 class="text-primary">19,380원</h4>
                </div>
              </div>
            </b-col> <b-col>
              <div class="prod-box">
                <img src="../assets/prod1.jpg" width="100%">
                <div>
                  펌프 모드 30서빙
                </div>
                <div>
                  <h4 class="text-primary">19,380원</h4>
                </div>
              </div>
            </b-col> <b-col>
              <div class="prod-box">
                <img src="../assets/prod1.jpg" width="100%">
                <div>
                  펌프 모드 30서빙
                </div>
                <div>
                  <h4 class="text-primary">19,380원</h4>
                </div>
              </div>
            </b-col>
            <b-col>
              <div class="prod-box">
                <img src="../assets/prod1.jpg" width="100%">
                <div>
                  펌프 모드 30서빙
                </div>
                <div>
                  <h4 class="text-primary">19,380원</h4>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
    <!-- // favoriteProd (banner) -->
    
    <!-- community -->
    <h2 class="mb-3">{{ community }}</h2>
    <b-table :items="items" :fields="fields">
      <template #table-caption></template>
    </b-table>
    <div class="d-flex justify-content-center">
      <button class="btn btn-warning"><a href="/community" class="more-btn">더보기</a></button>
    </div>
    <!-- // community -->

  </div>
</template>

<script>
import Community from './Community.vue';
export default {
  components: { Community },
  name: "Home",
  data() {
    return {
      favoriteProd: "인기 상품",
      community: "질문 있어요",
      fields: ['제목', '닉네임', '작성일자', '조회수', '추천수'],
      items: [
        { 제목: '다이어트 칼로리 탄수 조정 질문', 닉네임: 'Dickerson', 작성일자: '2022-06-06', 조회수: 1, 추천수: 4},
        { 제목: '운동순서 질문 있어요', 닉네임: 'Larsen',  작성일자: '2022-06-06', 조회수: 50, 추천수: 2},
      ]
    };
  },
  methods: {
    getData() {
      alert(this.input1);
    },
    setData() {
      this.input1 = "12345";
    }
  }
};
</script>

<style>
  #bannerImg {
    width: 100%;
    height: 450px;
  }

  .more-btn, .more-btn:hover {
    all: unset;
  }

  .prod-box {
    border: 1px solid black;
  }
</style>