(function () {
  var data = ['1. 我不喜欢参加学校的课外活动', '2. 我心情时好时坏', '3. 做作业必须反复检查', '4. 感到人们对我不友好，不喜欢我', '5. 我感到苦闷', '6. 我感到紧张或容易紧张', '7. 我学习劲头时高时低', '8. 对现在的学校生活感到不适应', '9. 看不惯现在的社会风气', '10. 为保证正确，做事必须做得很慢', '11. 我的想法总与别人不一样', '12. 总担心自己的衣服是否整齐', '13. 容易哭泣', '14. 我感到前途没有希望', '15. 我感到坐立不安，心神不定', '16. 经常责怪自己', '17. 当别人看着我或谈论我时，感到不安', '18. 感到别人不理解我', '19. 我常发脾气，想控制但控制不住', '20. 觉得别人想占我的便宜', '21. 大叫或摔东西', '22. 总在想一些不必要的事情', '23. 必须反复洗手或反复数数', '24. 我总感到有人在背后谈论', '25. 时常与人争论、抬杠', '26. 我觉得对大多数人都不可信任', '27. 我对做作业的热情忽高忽低', '28. 同学考试成绩比我高，我感到难过', '29. 我不适应老师的教学方法', '30. 老师对我不公平', '31. 我感到学习负担很重', '32. 我对同学忽冷忽热', '33. 上课时，总担心老师提问自己', '34. 我无缘无故地突然感到害怕', '35. 我对老师时而亲近时而疏远', '36. 一听说要考试，心里就感到好紧张', '37. 别的同学穿戴比我好，有钱，我感到不舒服', '38. 我讨厌做作业', '39. 家里环境干扰我学习', '40. 我讨厌上学', '41. 不喜欢班里的风气', '42. 父母对我不公', '43. 感到心里烦躁', '44. 我常常无精打采，提不起劲来', '45. 我感情容易受到别人的伤害', '46. 觉得心里不塌实', '47. 别人对我的表现评价不恰', '48. 明知担心没有用，但总害怕考不好', '49. 总觉得别人在跟我作对', '50. 我容易激动和烦恼', '51. 同异性在一起时，感到害羞不自在', '52. 有想伤害他人或打人的冲动', '53. 我对父母时而亲热，时而冷淡', '54. 我对比我强的同学并不服气', '55. 我讨厌考试', '56. 心里总觉得有事', '57. 经常有自杀的念头', '58. 有想摔东西的冲动', '59. 要求别人十全十美', '60. 同学考试成绩比我高，但能力并不比我强'];
  // var element = document. getElementById("next");
  var element = $('#first');
  var html = '';
  data.forEach(function (argument, index) {
    html += `<li data-input-trigger>
							<label class="fs-field-label fs-anim-upper" data-info="本题无特殊说明">${argument}</label>
							<div class="fs-radio-group fs-radio-custom clearfix fs-anim-lower">
								<span><input id="q${index + 1}a" name="q${index + 1}" type="radio" value="1"/><label for="q${index + 1}a" class="wu">无</label></span>
								<span><input id="q${index + 1}b" name="q${index + 1}" type="radio" value="2"/><label for="q${index + 1}b" class="qingdu">轻度</label></span>
                <span><input id="q${index + 1}c" name="q${index + 1}" type="radio" value="3"/><label for="q${index + 1}c" class="zhongdu">中度</label></span>
                <span><input id="q${index + 1}d" name="q${index + 1}" type="radio" value="4"/><label for="q${index + 1}d" class="pianzhong">较重</label></span>
                <span><input id="q${index + 1}e" name="q${index + 1}" type="radio" value="5"/><label for="q${index + 1}e" class="yanzhong">严重</label></span>
							</div>
						</li>`;
  });
  // element.innerHTML = html;
  element.after(html);
})();