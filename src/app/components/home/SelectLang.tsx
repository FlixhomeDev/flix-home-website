import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function SelectLang() {
  return (
    <Select>
      <SelectTrigger className="bg-transparent !h-auto w-auto ring-0 text-white flex justify-center items-center gap-x-2 p-0 !outline-none border-0">
        <SelectValue
          placeholder="PT"
          // defaultValue={'PT'}
          className="text-xs text-white font-inter font-normal"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="pt">PT</SelectItem>
        <SelectItem value="en">En</SelectItem>
        <SelectItem value="Es">ES</SelectItem>
      </SelectContent>
    </Select>
  )
}
