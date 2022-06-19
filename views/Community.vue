<template>
  <div>

    <div class="d-flex justify-content-between mt-3 mb-3"> 
      <h2>소통해요</h2>

      <div class="d-flex align-items-center">
        <select>
          <option>추천순</option>
          <option>조회순</option>
          <option>최신순</option>
        </select>
      </div>
    </div>

    <div class="d-flex justify-content-end mb-3">
      <button class="btn btn-primary">글쓰기</button>
    </div>

    <b-table :items="items" :fields="fields">
      <template #table-caption></template>
    </b-table>

    <div class="d-flex justify-content-end">
      <button class="btn btn-primary">글쓰기</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: ['제목', '닉네임', '작성일자', '조회수', '추천수'],
        items: [
          { 제목: '다이어트 칼로리 탄수 조정 질문', 닉네임: 'Dickerson', 작성일자: '2022-06-06', 조회수: 1, 추천수: 4},
          { 제목: '운동순서 질문 있어요', 닉네임: 'Larsen',  작성일자: '2022-06-06', 조회수: 50, 추천수: 2},
          { 제목: '헬린이 식단 질문', 닉네임: 'Geneva',  작성일자: '2022-06-06', 조회수: 22, 추천수: 40}
        ]
      }
    }
  }
</script>