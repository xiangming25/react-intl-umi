var str = `
export default {
  'courseManagement.evaluationsNumber': '{number} evaluations',
  'courseManagement.viewThirdContent': 'View the course content provided by third parties',
  'courseManagement.shareThirdContentDescription':
    'You can share your courses to others and invite them to become Allschool users. You can get rewards for successful invitations. Click the "Share" button to share. If you want to view your invitation records, please click ',
  'courseManagement.shareThirdContentDescriptionHere': 'here',
  'courseManagement.lessons': 'Lessons',
  'courseManagement.lesson': 'Lesson',
  'courseManagement.lessonTime': 'Lesson Duration',
  'courseManagement.createLesson': 'Create a new lesson',
  'courseManagement.lessonPlaceholder': 'The duration of each lesson will be the same as stated here.',
  'courseManagement.ageGroup': 'Ages',
  'courseManagement.all': 'All',
  'courseManagement.share': 'Share',
  'courseManagement.courseDetails': 'Course details',
  'courseManagement.courseContent': 'Course Content',
  'courseManagement.sellingInfomation': 'Listing Information',
  'courseManagement.lessonTitle': 'Lesson Title',
  'courseManagement.lessonIntroduction': 'Lesson Introduction',
  'courseManagement.title': 'Course Title',
  'courseManagement.titleRequiredMessage': 'Please fill in the course title',
  'courseManagement.subject': 'Subject',
  'courseManagement.subjectRequiredMessage': 'Subject required',
  'courseManagement.courseLabel': 'Course Labels',
  'courseManagement.courseLabelRequiredMessage': 'Please select the course label',
  'courseManagement.titlePlaceholder':
    'Choose a course title that is strongly related to the content, which will make it easier for users to find.',
  'courseManagement.subjectPlaceholder': 'Select subject',
  'courseManagement.subjectNotice':
    'A subject that best matches your content will make it easier for users to find your course.',
  'courseManagement.labelPlaceholder': 'Select course label',
  'courseManagement.classTimeClose': 'Cancel',
  'courseManagement.labelNoticePlaceholder':
    'Labels that best match your content will make it easier for users to find your course.',
  'courseManagement.close': 'Close',
  'courseManagement.next': 'Next step',
  'courseManagement.saveDrafts': 'Save draft',
  'courseManagement.introduction': 'Introduction',
  'courseManagement.introductionRequiredMessage': 'Introduction required',
  'courseManagement.introductionPlaceholder':
    'Please describe your course content clearly in one or two sentences so that users can understand easily.',
  'courseManagement.courseCover': 'Course Photo Cover',
  'courseManagement.courseCoverPlaceholder':
    'Choosing an attractive course photo cover will make it easier for users to find your course. Please upload a picture with a ratio of 16:9 and make sure that the picture has no copyright issues. Please confirm the Content you use will not infringe any third party’s rights.',
  'courseManagement.uploadImage': 'Upload image',
  'courseManagement.introductionVideo': 'Introductory Video',
  'courseManagement.uploadVideo': 'Upload video',
  'courseManagement.introductionVideoPlaceholder':
    'Introduce your course to users in detail. You can upload up to 5 videos.',
  'courseManagement.courseLanguage': 'Course Language',
  'courseManagement.courseLanguagePlaceholder': 'Choose the language of the course content',
  'courseManagement.lessonCover': 'Lesson Cover',
  'courseManagement.parentsGuide': "Parent's Guide",
  'courseManagement.guidePlaceholder':
    'All the information you want parents to pay attention to can be placed here, the parent guide will be displayed in the mall, and users can also view it after purchasing the course.',
  'courseManagement.uploadGuideDesc':
    'Please upload files no more than 100M, audio and video support .mp3, .wav, .wma, .avi, .mp4, .mkv, .mov, .flv, documents support .ppt, .pptx, .doc, .docx,. pdf, pictures support .png, .jpg, .jpeg, up to 5.',
  'courseManagement.teachingPlan': 'Teaching Plan',
  'courseManagement.teachingPlanDesc':
    'You can choose to fill in the teaching plan to manage your materials. Only you can see the teaching plan.',
  'courseManagement.teachingActivities': 'Teaching Activities',
  'courseManagement.teachingActivitiesDesc':
    'The content in the teaching activities is the materials you use in teaching. The preview and homework will be directly displayed to users. The courseware is displayed to learnerse by you during teaching.',
  'courseManagement.preview': 'Preview',
  'courseManagement.previewDesc':
    'Preview is what you want students to learn before class. The preview will be displayed in the mall, and users can also view it after purchasing the course.',
  'courseManagement.uploadPreviewDesc':
    'Please upload files no more than 100M, audio and video support .mp3, .mp4, documents support .ppt, .pptx, .pdf, pictures support .png, .jpg, .jpeg, up to 5.',
  'courseManagement.courseware': 'Courseware',
  'courseManagement.coursewareDesc':
    'The courseware is what you teach during the teaching. The courseware will not be displayed in the mall. You need to show it to the learners during the teaching. Please be sure to put in all the documents that need to be shown to the students during the class.',
  'courseManagement.uploadCoursewareDesc':
    'Please upload files no more than 100M, documents supports .ppt, .pptx, .pdf, up to 5.',
  'courseManagement.homework': 'Homework',
  'courseManagement.homeworkDesc':
    'The homework is what you want the students to complete after the teaching. The homework will be displayed in the mall, and users can also view it after purchasing.',
  'courseManagement.uploadHomeworkDesc':
    'Please upload files no more than 100M, audio and video support .mp3, .mp4, documents support .ppt, .pptx, .pdf, pictures support .png, .jpg, .jpeg, up to 10',
  'courseManagement.save': 'Save and close',
  'courseManagement.saveTipContent': 'Canceling does not save data. Please, confirm canceling ?',
  'courseManagement.uploadAttachment': 'Upload attachment',
  'courseManagement.confirmClose': 'Cancel',
  'courseManagement.saveAndClose': 'Confirm',
  'courseManagement.tips': 'Tips',
  'courseManagement.courseDesc': 'Description',

  'courseManagement.studentGains': 'Learner Gains',
  'courseManagement.studentGainsDesc':
    'Please concisely describe the gains learners can get. You can enter 1 to 10 texts. Learner gains can let users quickly understand your content.',
  'courseManagement.teachingTools': 'Teaching Software',
  'courseManagement.teachingToolsDesc':
    'Classpod is a live teaching software provided by the platform. Currently classpod only supports up to 12 students to attend classes at the same time.',
  'courseManagement.lectureLanguage': 'Class Language',
  'courseManagement.teachingToolsClickHere': 'Click here',
  'courseManagement.teachingToolsDownloadClassPodDesc':
    'to learn more about Classpod. You can log in Classpod with your Allschool account.',
  'courseManagement.teachingToolsDesc2':
    'to learn more about Classpod. You can log in Classpod with your Allschool account.',
  'courseManagement.teachingToolsDesc2click': 'Click here ',
  'courseManagement.teachingToolsDescZoom1':
    'Want to earn {commissionRatio} percent more in commission? Choose Classpod!',
  'courseManagement.teachingToolsDescZoom3':
    "Want to earn {commissionRatio} percent more in commission? Click 'Previous step' to upload the courseware of each lesson and choose Classpod!",
  'courseManagement.lectureLanguagePlaceholder': 'Choose the language to be used in class.',
  // 练课
  'courseManagement.practiceBtn': 'Practice NOW',
  'courseManagement.practiceSelectCourse': 'Please Choose a Lesson',
  'courseManagement.practiceSelectCourseDesc': 'Using Classpod to practice lesson: ',
  'courseManagement.practiceSelectPlaceholder': 'Choose a lesson',
  'courseManagement.practiceCancel': 'Not now',
  'courseManagement.acceptErrorMsgFormat': 'Only support {typeString} file(s) to be uploaded',
}

`;
// const newStrArr = str.match(/\{[^\}][\s\S]*\}/);
// let newStr = newStrArr[0];
// // 匹配时，内容中也可以也有感叹号
// newStr = newStr.replace(/\/\/.*?(?=[\n\r])/g, '')
//   .replace(/(['"]?)(\b[a-zA-Z-.]+\b)(['"]?\s{0,}:)/g, '"$2":')
//   .replace(/\'/g, '"')
//   .replace(/,[\n\r]?\s{0,}(\})/g, '$1');
// const newObj = JSON.stringify(newStr);
// console.log('log:newObj-------------: ', newObj);
// console.log('log:newObj-------------: ', JSON.parse(JSON.parse(newObj)));

const contentReg = /(['"]?[\w-.]+['"]?:\s?['"].*?['"])/g;
const newStr = str.replace(/(:\s{0,})[\n\r]\s{0,}(['"])/g, '$1$2');
const newStrArr = newStr.match(contentReg);
console.log('log:newStrArr-------------: ', newStrArr);