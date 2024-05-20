#주석처리
-- 주석처리 (--뒤에 한칸 띄움

-- 1. 데이터베이스 만들기
create database member;

-- 데이터베이스 사용하기
use member;

-- 데이터베이스 지우기
drop database member;

-- 2. 테이블 만들기
CREATE TABLE member_table(
seq INT Not Null AUTO_INCREMENT, -- 정수 + 비워두지 말기 + 자동으로 1씩 증가
mb_id VARCHAR(20) not null UNIQUE, -- 비워두지 말기 + 유일한 이름
mb_pw VARCHAR(50) not null, -- 비워두지 말기
mb_name VARCHAR(10) not null, -- 비워두지 말기
address VARCHAR(100),
phone1 VARCHAR(3),
phone2 VARCHAR(10),
height int,
salary int,
month int,
PRIMARY KEY(seq) -- 데이터베이스끼리 연결할 때 사용되는 수단
);

-- 테이블 삭제
drop table member_table;

select * from member_table;

-- 데이터 입력
INSERT INTO member.member_table VALUES(NULL,"240510_1","12345","박일현","부산시 진구 부전동 221-1","051","11111111",163,3200000,3);
INSERT INTO member.member_table VALUES(NULL,"240510_2","67890","박이번","경상북도 영주시 부석면 영부로120번길 59","054","22223333",165,300000,12);

INSERT INTO member.member_table VALUES(NULL,"240510_1","12345","박일현","부산시 진구 부전동 221-1","051","11111111",163,3200000,3),
                                      (NULL,"240510_2","67890","박이번","경상북도 영주시 부석면 영부로120번길 59","054","22223333",165,300000,12);
                                      
insert into member.member_table values(null,"220729_1","12345","박일자","부산시 진구 부전동 221-1","051","11111111",163,3200000,7),
      (null,"220729_2","22145","김하자","경상북도 영주시 부석면 영부로120번길 59","054","22222222",175,4500000,2),
      (null,"220729_3","78521","강꾸준","강원도 인제군 남면 신남로58번길 28","033","33333333",180,4000000,9),
      (null,"220729_4","98745","정열심","경상북도 청송군 파천면 중평병부길 128","054","44444444",164,3000000,6),
      (null,"220729_5","45216","이합격","전라북도 정읍시 수성1로 32(수성동) ","063","55555555",183,2750000,13),
      (null,"220729_6","78522","배밀자","전라남도 고흥군 도화면 구암로 3","061","66666666",165,3200000,5),
      (null,"220729_7","78954","도민규","경상남도 진주시 수곡면 원창길 82",null,null,177,3000000,3),
      (null,"220729_8","22145","민윤기","경상남도 진주시 집현면 불너머길 74","055","88888888",185,4000000,8),
      (null,"220729_9","78541","박지민","경상북도 포항시 북구 죽장면 죽장로 1577-30","054","99999999",182,2700000,16),
      (null,"220729_10","41253","김태형","강원도 강릉시 왕산면 방터길 53-70 ","033","12345678",175,3200000,9),
      (null,"220729_11","45871","김석진","충청남도 서천군 화양면 화한로61번길 21","041","11223344",165,4000000,10),
      (null,"220729_12","78541","박이자","충청북도 옥천군 청산면 청산관기로 549-2","043","99887766",165,3100000,3);
      
-- insert into 테이블 (열이름1, 열이름2...) VALUES(값1, 값2...)
      
INSERT into.member_table (mb_id,mb_pw,mb_name)values("220729_13","78424","박십삼");
      
      
      
select * from member_table;
-- 이름만 부를 때
select mb_name from member_table;
      
      
-- where 조건문
select * from member_table where height <= 165;
select * from member_table where height >= 165 and height <= 180;
select * from member_table where salary > 3500000;
      
-- 입사일이 1년이 넘은 사람, 사람 이름 검색
select mb_name from member_table WHERE month >= 12;
-- 별칭사용하기
select mb_name "이름" from member_table WHERE month >= 12;
      
select * from member_table where mb_name like '김%'; -- 김씨만 검색
      
select * from member_table where mb_name like '김%' or mb_name like '박%';
      
      
select * from member_table WHERE mb_name like "박%자"; -- '박'과 '일' 사이에 글자 갯수가 많아도 선택됨
      
select * from member_table WHERE mb_name like "박_자"; -- '박'과 '일' 사이에 글자가 하나일 경우 선택 (ex 만약 2개를 원하면 _ _ 두개")
      
select * from member_table WHERE mb_name in ("강꾸준", "이합격");
      
select * from member_table WHERE height order by height DESC; -- DESC가 맨뒤로 올땐 내림차순
select * from member_table WHERE height order by height ASC; -- ASC 오름차순
DESC member_table; -- DESC가 앞으로 올땐 member_table 테이블 자체의 구조 확인
      
-- 월급이 3500000이상인 사람의 mb_id, mb_name, salary 월급의 기준으로 내림차순
select mb_id, mb_name,salary from member_table where salary >= 3500000 order by salary DESC, mb_name ASC;
      
      
select * from member_table;
-- 수정하기
UPDATE member_table set address="전라북도 정읍시 수성1로 32(수정동)" where mb_name="이합격";
-- 정열심의 키는 174로 수정하기
UPDATE member_table set height="174" where mb_name = "정열심";
      
-- 월급이 2백오십이상 3백오십이하인 행을 선택하시오    
select * from member_table where salary >= 2500000 and salary <= 3500000 order by salary asc;

-- 지역이 경상북도 또는 충청북도인 행을 선택하시오
select * from member_table where address like "경상북도%" or address like "충청북도%";

-- 이름이 강꾸준 또는 박일자 행을 선택하시오
select * from member_table where mb_name in("강꾸준", "박일자");

-- 전체임금의 평균보다 높은 행을 모두 찾으시오
select avg(salary) from member_table; -- 평균값
select * from member_table where salary>(select avg(salary) from member_table);

-- 임금이 가장 높은 사람과 가장 낮은 사람의 차는 얼마인가
select max(salary) from member_table;
select min(salary) from member_table;

select max(salary) - min(salary) from member_table;

-- 강꾸준의 정보만 보려면
select * from member_table where mb_name like "강꾸준";


-- 강꾸준 한 줄만 지우기
delete from member_table where mb_name like "강꾸준";

-- 테이블 삭제
drop table member_table;

-- 데이터 베이스 삭제
drop database member;




