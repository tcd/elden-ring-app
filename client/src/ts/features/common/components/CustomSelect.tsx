import Autocomplete, { AutocompleteChangeDetails, AutocompleteChangeReason } from "@mui/material/Autocomplete"
import Box from "@mui/material/Box"
import MenuItem from "@mui/material/MenuItem"
import TextField from "@mui/material/TextField"

import { isBlank } from "@app/util"

interface SelectOption {
    value: any
    label: any
    imageUrl?: string
}

export interface CustomSelectProps {
    label: string
    options: SelectOption[]
    onChange: (value: string) => void
    selectedValue?: any
}

export const CustomSelect = (props: CustomSelectProps): JSX.Element => {

    const value = props?.selectedValue ?? ""

    const handleChange = (
        _event: React.SyntheticEvent<Element, Event>,
        value: any,
        reason: AutocompleteChangeReason,
        _details?: AutocompleteChangeDetails<any>,
    ) => {
        if (reason == "selectOption") {
            props.onChange(value.value)
        }
        return null
    }

    const optionWithImage = (optProps: React.HTMLAttributes<HTMLLIElement>, option: SelectOption) => {
        if (isBlank(option?.imageUrl)) {
            return (
                <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...optProps}>
                    <span style={{ width: "30px" }}></span>
                    {option.label}
                </Box>
            )
        }
        return (
            <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...optProps}>
                <img
                    loading="lazy"
                    width="30px"
                    src={option.imageUrl}
                    // alt={option.label}
                />
                {option.label}
            </Box>
        )
    }

    return (
        <Autocomplete
            id={props.label}
            sx={{ width: 300 }}
            options={props.options}
            // autoHighlight
            value={value}
            renderOption={(optProps, option) => optionWithImage(optProps, option)}
            onChange={handleChange}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={props.label}
                    inputProps={{
                        ...params.inputProps,
                    }}
                />
            )}
        />
    )
}
