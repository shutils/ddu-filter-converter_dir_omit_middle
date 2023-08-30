import {
  BaseFilter,
  BaseFilterParams,
  DduItem,
} from "https://deno.land/x/ddu_vim@v3.4.4/types.ts";
import { basename, dirname } from "https://deno.land/std@0.196.0/path/mod.ts";
import { FilterArguments } from "https://deno.land/x/ddu_vim@v3.4.4/base/filter.ts";

type FilterParams = {
  maxDirLength: number;
};

export class Filter extends BaseFilter<BaseFilterParams> {
  filter(
    { items, filterParams }: FilterArguments<FilterParams>,
  ): Promise<DduItem[]> {
    return Promise.resolve(items.map((item: DduItem) => {
      const path = item.display ?? item.word;
      const dirName = dirname(path);
      if (filterParams.maxDirLength < dirName.length) {
        const pre = dirName.slice(0, filterParams.maxDirLength / 2);
        const suff = dirName.slice(
          dirName.length - filterParams.maxDirLength / 2,
          dirName.length,
        );
        const omitPath = pre + "..." + suff + "/" + basename(path);
        item.display = omitPath;
      } else {
        item.display = path;
      }
      return item;
    }));
  }
  params(): FilterParams {
    return {
      maxDirLength: 40,
    };
  }
}
