---
layout: page
title: Process Illumina reads
permalink: /align/
parent: Analysis
nav_order: 4
---

<a href="#" class="btn btn-green fs-5 mb-4 mb-md-0 mr-2">STEP 1: adapter split and quality control</a>

<div ondrop="dragAndDrop(event)" ondragover="dragAndDrop(event)" ondragend="dragAndDrop(event)">
        <nav class="navbar navbar-expand-md navbar-dark bg-inverse">
            
            <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item"></li>
                </ul>
            </div>
            <span class="spinner" style="display:none"></span>
            <div class="mx-auto order-0">
                <div style="float:left" class="loadingfile navbar-brand mx-auto">
                    <a id="btnPause" href="#" class="button btn btn-primary btn-sm" role="button" style="display:none"><span class="fa fa-pause"></span></a>
                    &nbsp;
                    <span></span>   
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul class="navbar-nav ml-auto">

                </ul>
            </div>
        </nav>

        <!-- Container -->
        <div class="">
            <div class="containerMain jumbotron" style="text-align:center; height:100vh">
                <p class="lead">
                    The following software takes fasta, fastq, fq, fq.gz<br> 
                    It then performs quality control and splits the adapters.<br>
                    This is 100% secure your data never leaves the browser and is not available to anyone else.
                </p>
                <br>
                <button id="btnNewFile" class="btn btn-lg btn-primary" role="button">Upload FASTQ file</button>
                <input id="upload" type="file" style="display:none">
                <br><br>
                <p class="lead" style="color:#999"><a id="btnSample" href="#">Use Example FASTQ (1RH_R1_001.fastq.gz)</a></p>
            </div>
            <div class="containerPreview" style="display:none; height:100vh">
                <div class="progress" style="height: 10px; border-radius:0">
                    <div class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <div class="row">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-5">
                        <div id="plot-per-base-sequence-content" class="responsive-plot" style="height:46vh; width:40vw"></div>
                    </div>
                    <div class="col-sm-5">
                        <div id="plot-per-base-sequence-quality" class="responsive-plot" style="height:46vh; width:40vw"></div>
                    </div>
                    <div class="col-sm-1"></div>
                </div>

                <div class="row">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-5">
                        <div id="plot-dist-gc-content-per-read" class="responsive-plot" style="height:46vh; width:40vw"></div>
                    </div>
                    <div class="col-sm-5">
                        <div id="plot-dist-seq-length" class="responsive-plot" style="height:46vh; width:40vw"></div>
                    </div>
                    <div class="col-sm-1"></div>
                </div>
            </div>
        </div>

        <!-- JavaScript Libraries
        ======================================================================== -->
        <!-- Bootstrap / JQuery -->
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <!-- Plotly -->
        <script src="https://cdn.plot.ly/plotly-1.30.0.min.js" integrity="sha384-9I+xvBv+nGk5/ckJh9ZsFmoCRtC7j2KI7hpwfnnObbiWXiTrctb3A2IuweOYt2fw" crossorigin="anonymous"></script>
        <!-- App JS -->
        <script src="../assets/js/app.js"></script>
        <script src="../assets/node_modules/@robertaboukhalil/aioli/aioli.js"></script>
    </div>
