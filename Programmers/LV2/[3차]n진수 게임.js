function solution(n, t, m, p) {
  let str = "";

  // 튜브는 t개의 숫자를 구해야한다.
  // 게임의 참가인원(m) * 미리 구할 숫자의 갯수(t)를 보다
  // 작을 때 까지만 for문을 반복한다.
  // 이러면 모든 사람이 숫자 4개를 구할 만큼의 숫자가 나온다.
  for (let i = 0; str.length < m * t; i++) {
    // toString() 메서드는 매개변수로 진법을 넘기게 되면
    // 해당 진법에 맞는 문자열을 반환해준다.
    // 16진법일 경우 알파벳이 나올수 있는데
    // 대문자를 출력하라는 설명대로 대문자로 변환해준다.
    str += i.toString(n).toUpperCase();
  }

  let answer = "";
  let cnt = 0;

  // t만큼만 구하기 위해 t보다 작을 때 까지만 설정한다.
  while (answer.length < t) {
    // substring() 메서드를 통해 인원 수 만큼 문자열을 자른다.
    // ex) "012345678" -> "01" -> "23" -> "45"
    const s = str.substring(cnt, cnt + m);

    // 인덱스는 0부터이므로 튜브의 순서 - 1을 해서
    // 튜브가 말해야 하는 수를 문자열에 더해준다.
    answer += s[p - 1];

    // 다음 수를 위해 참가 인원수 만큼 더해준다.
    cnt += m;
  }
  return answer;
}
