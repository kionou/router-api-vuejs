<template>

    <div v-if="job">
        <h1>{{job.title}}</h1>
        <p>The job id is {{id}}</p>
        <p> {{job.details}}</p>
    </div>
    <div v-else>
        <p>Loading jobs details....</p>
    </div>
   
</template>

<script>
export default {
    props: ['id'],
    data(){
        return{
          job:null    
        }
    },
    mounted(){
        fetch('http://localhost:8000/jobs/' + this.id)
        .then(res =>res.json())
        .then(data=>{
            this.job = data
            console.log(data);
            return data
        })
        .catch(error=>{
            console.log(error.message);
        })

    }

}
</script>

<style>

</style>