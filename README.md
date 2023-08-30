# WIP:ddu-filter-converter_dir_omit_middle

Converter for ddu.vim

This converter is omit long directory name.

## Required

### denops.vim

https://github.com/vim-denops/denops.vim

### ddu.vim

https://github.com/Shougo/ddu.vim

## Configuration

```vim
call ddu#custom#patch_global(#{
    \   filterParams: #{
    \     converter_dir_omit_middle: #{
    \       maxDirLength: 40,
    \     },
    \   }
    \ })
```
