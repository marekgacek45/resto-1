<template>
     <FrameBox :custom-class="'flex flex-col   py-12'"
                    >
                        <div class="flex justify-center items-center gap-2">
                            <span class="opacity-50">※</span>
                            <h3 class="text-2xl uppercase">Godziny otwarcia</h3>
                            <span class="opacity-50">※</span>
                        </div>
                        <div class="px-12 py-6">
                            <DayRow
                                :day="'Poniedziałek'"
                                :hours="'nieczynne'"
                            />
                            <DayRow :day="'Wtorek'" :hours="'16.00 - 22.30'" />
                            <DayRow :day="'Środa'" :hours="'16.00 - 22.30'" />
                            <DayRow
                                :day="'Czwartek'"
                                :hours="'16.00 - 22.30'"
                            />
                            <DayRow :day="'Piątek'" :hours="'12.00 - 23.30'" />
                            <DayRow :day="'Sobota'" :hours="'12.00 - 23.30'" />
                            <DayRow
                                :day="'Niedziela'"
                                :hours="'12.00 - 22.30'"
                            />
                        </div>
                    </FrameBox>
</template>

<script setup>

import FrameBox from "@/Components/FrameBox.vue";
import DayRow from  "@/Components/Contact/DayRow.vue";


</script>