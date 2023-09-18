import { ChapterList, UserChapter } from '../../interfaces/Chapter.interface';

export function localStorageInit(allChapterList: ChapterList) {
  if (localStorageIsNull()) {
    const localUserChapter: UserChapter = {
      data: []
    };
    const initList = allChapterList.data.map((el, idx) => {
      return {
        chapterId: idx + 1,
        chapterStatus: false,
        progress: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] as (0 | 1 | 2)[]
      };
    });
    localUserChapter.data = initList;

    localStorageSet(localUserChapter);
  }
}

export function localStorageIsNull() {
  return localStorage.getItem('userChapter') == null;
}

export function localStorageGet(): UserChapter {
  const localUserChapter = localStorage.getItem('userChapter');
  return JSON.parse(localUserChapter!);
}

export function localStorageSet(userChapter: UserChapter) {
  localStorage.setItem('userChapter', JSON.stringify(userChapter));
}
