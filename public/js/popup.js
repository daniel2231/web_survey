let helpButton = document.querySelector(".help-button");
let closeButton = document.querySelector(".close-button");
let popUp = `
<div class="popup">

    <div class="d-flex">
      <h2>도움말</h2>
      <i class="fas fa-times close-button" style="margin-left: auto" onclick="document.querySelector('.popup').remove();"></i>
    </div>
  </div>
  <div class="popup-body">
    <p>
      <b>PER = 주식가격 / 주당 순이익</b>
      <br />
      주가수익비율로 이 지표를 통해 비슷한 사업을 하는 회사에 비해
      시장에서 저평가/고평가 받고 있는지를 알 수 있어요.
      <br />
      <br />
      <b>PBR = 주식가격 / 주당 순자산</b>
      <br />
      PBR이 낮을수록 회사의 주식 가격이 저평가되었다고 할 수 있어요.
      그러나 PER, ROE 등 다른 지표들을 종합적으로 따져보고 투자 결정을
      내리는 게 중요해요.
      <br />
      <br />

      <b>배당수익률 = 주당 배당금 / 주식가격</b>
      <br />
      배당 수익률을 보면 내가 배당금으로 주식 가격 대비 얼마만큼의 수익을
      기대할 수 있는지 알 수 있어요.
      <br />
      <br />
      <b>외국인소진율</b>
      <br />
      외국인 투자자가 가질 수 있는 한도 내에서, 현재 가진 주식 수량이
      몇%인지를 나타내는 비율이에요.
    </p>
  </div>
</div>
`;


