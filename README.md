PROJECT STRUCTURE

<!-- prettier-ignore -->
```
project
  |- src
      |- assets //เก็บไฟล์ รูปภาพ หรือ style ต่างๆ
      |- components // เก็บไฟล์ หรือ folder ของ components ต่างๆที่เอาไว้ใช้ใน project
          |- header // folder เก็บ component ที่เกี่ยวข้องกับ header 
              |- HeaderComponent.vue
              |- UserComponent.vue
          |- FooterComponent.vue // component footer
      |- core //เก็บไฟล์ที่เกี่ยวกับ api หรือ config
          |- config // เก็บไฟล์การตั้งค่าต่างๆ 
              |- ApiService.ts // การตั้งค่า api set เรื่อง baseURL set header ต่างๆ ทำเป็น function ไว้ให้หน้าอื่นๆเรียกใช้
          |- plugins // เก็บไฟล์ plugin ต่างๆที่เอาไว้ใช้ใน Project
              |- Loading.ts // ตัว ui block loading กลางที่เอาไว้ให้ project ใช้ เช่นเวลา กดปุ่ม submit ต้อง loading ทิ้งไว้จนกว่า api จะ response เสร็จ
          |- services // เก็บไฟล์ของ service ที่ต่อ api ต่างๆ
              |- Auth.ts // ไฟล์ api ของ Authen 
              |- User.ts // ไฟล์ api ของ User
          |- types // เก็บไฟล์ type ของ TypeScript ในหมวดต่างๆ
              |- UserType.ts // type ของเรื่อง user
      |- router
          |- index.ts // เก็บตั้งค่าเกี่ยวกับ vue-router
      |- layouts // เก็บ layout ต่างๆที่ต้องใช้ใน project
          |- PlainLayout.vue // ไฟล์ layout เปล่าๆ ที่จะมีแค่ตัว view เท่านั้น เช่น หน้า login ที่ไม่ต้องมี header หรือ footer 
          |- MainLayout.vue // ไฟล์ layout หลักของ Project เช่นถ้า project หน้าหลักๆจะต้องมี header และ footer ก็จะมีการ import headerComponent และ footerComponent มาใช้ในนี้ และ ก็จะใช้ view เป็น content ตรงกลางเป็น
      |- views // เก็บไฟล์ของหน้าต่างๆ
  |- test // เก็บไฟล์ test spec
      |- unit // เก็บไฟล์ test spec
      
```
