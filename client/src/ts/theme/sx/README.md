# `.scss` to `SxProps`

| pattern  | replace with |
| -------- | ------------ |
| `-(\S)`  | `\u$1`       |
| `:(\s+)` | `: "`        |
| `;$`     | `",`         |
