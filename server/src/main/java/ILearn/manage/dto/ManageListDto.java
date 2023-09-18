package ILearn.manage.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ManageListDto {
    private Long chapterId;
    private boolean chapterStatus;
    private List<Integer> progress;
}