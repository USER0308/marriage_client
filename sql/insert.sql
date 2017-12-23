USE marriage_client;

-- INSERT INTO user (account, password) VALUES ('test','testpw');

INSERT INTO detail_info (user_id,age,marriage,scholar,working_place,gender,birth_place,height,weight,nationation,animal,constellation,blood_type,occupation) VALUES ((SELECT id FROM user WHERE account='test'),'29','离异','大专','重庆南岸区','女','重庆南岸区','160cm','43kg','汉','龙','巨蟹座','暂未填写','自由职业');

INSERT INTO living_info(user_id,incoming_pre_year,house,car,smoke,alcohol,kitchen,when_to_marriage,live_with_self_parent,live_with_another_parent,most_cost,most_investion,debt,exercise,diet,timetable) VALUES ((SELECT id FROM user WHERE account='test'),'200000元','已购房','已购车','不吸烟','不喝酒','暂未填写','时机成熟就结婚','暂未填写','暂未填写','暂未填写','暂未填写','暂未填写','暂未填写','暂未填写','暂未填写');
INSERT INTO favorite_info(user_id,favorite_sport,favorite_music,favorite_movie,favorite_food,favorite_place,favorite_pet) VALUES ((SELECT id FROM user WHERE account='test'),'暂未填写','暂未填写','暂未填写','暂未填写','暂未填写','暂未填写');

INSERT INTO another_info(user_id,another_gender,another_age,another_height,another_scholar,another_incoming_pre_year,another_marriage,another_working_place,another_weight,another_occupation,another_smoking,another_alcohol,another_has_baby,another_want_baby) VALUES ((SELECT id FROM user WHERE account='test'), '男','30以上','175厘米以上','大学本科','240000元以上','不限','重庆南岸区','不限','不限','不限','不限','没有','以后再告诉你吧');




-- INSERT INTO user (account, password) VALUES ('test2','testpw2');

INSERT INTO detail_info (user_id,age,marriage,scholar,working_place,gender,birth_place,height,weight,nationation,animal,constellation,blood_type,occupation) VALUES ((SELECT id FROM user WHERE account='test2'),'40','离异','中专','山东青岛','男','山东青岛','170cm','80kg','汉','蛇','射手座','暂未填写','服务业');

INSERT INTO living_info (user_id,incoming_pre_year,house,car,smoke,alcohol,kitchen,when_to_marriage,live_with_self_parent,live_with_another_parent,most_cost,most_investion,debt,exercise,diet,timetable) VALUES ((SELECT id FROM user WHERE account='test2'), '3000元以下','已购房','已购车','稍微抽一点','稍微喝一点','暂未填写','暂未填写','暂未填写','暂未填写','暂未填写','暂未填写','暂未填写','暂未填写','暂未填写','暂未填写');

INSERT INTO favorite_info (user_id,favorite_sport,favorite_music,favorite_movie,favorite_food,favorite_place,favorite_pet) VALUES ((SELECT id FROM user WHERE account='test2'),'暂未填写','暂未填写','暂未填写','暂未填写','暂未填写','暂未填写');

INSERT INTO another_info (user_id,another_gender,another_age,another_height,another_scholar,another_incoming_pre_year,another_marriage,another_working_place,another_weight,another_occupation,another_smoking,another_alcohol,another_has_baby,another_want_baby) VALUES ((SELECT id FROM user WHERE account='test2'),'女','不限','155cm以上','不限','不限','不限','山东青岛','不限','不限','不吸烟','不喝酒','没有','视情况而定');
