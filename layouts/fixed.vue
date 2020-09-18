<template>
    <div id="page">
        <PageHeader />
        <main id="main" class="lg:h-screen min-h-screen lg:min-h-0 flex items-center bg-black text-white">
            <!-- <div class="main__overlay absolute top-0 left-0 w-full h-full z-0"></div> -->
            <Nuxt />
        </main>
        <PageFooter
            :isSticky="true"
        />
    </div>
</template>
