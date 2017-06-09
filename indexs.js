/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
    
};
$(document).ready(function(){
        $("#infor").click(function(event){
            event.preventDefault();
            location.href="infor.html";
        });
        $("#btnindex").click(function(evens){
            evens.preventDefault();
            location.href="index.html";
        });
        $("#reglog").click(function(even){
            even.preventDefault();
            location.href="reglog.html";
        });
        $("#login").click(function(even){
            even.preventDefault();
            location.href="login.html";
        });
        $("#reg").click(function(even){
            even.preventDefault();
            location.href="register.html";
        });
        $("#btnreglog").click(function(even){
            even.preventDefault();
            location.href="reglog.html";
        });
        $("#registerback").click(function(even){
            even.preventDefault();
            location.href="reglog.html";
        });
        
        
        //capture data and send to php script
        $("#btnsend").click(function(){
            var username=$("#user").val();
            var password=$("#pass").val();
            
            if(username===""){
                $("#dis").slideDown().html("<span id='err'>Please Type Username</span>");
                return false;
            }
            if(password===""){
                $("#dis").slideDown().html("<span id='err'>Please Type Password</span>");
                return false;
            }
            else{
               $.ajax({
                   type: 'post',
                   dataType:'text',
                   url:  'php/login.php',
                   data: $("form").serialize(),
                   success:function(data){
                       if(data==="success"){
                           location.href='http://www.myfarm.com.yashcomm.com/farm/php/index.php';
                       }else{
                         $("#dis").slideDown().html(data);  
                       }
                   },
                   error:function(data){
                       $("#dis").slideDown().show(data);
                   }
                   
               });
            }
            return false;
        });
        
        //register
        $("#register").click(function(eve){
            eve.preventDefault();
            var firstname=$("#fname").val();
            var lastname=$("#lname").val();
            var users=$("#user").val();
            var status=$("#status").val();
            var location=$("#location").val();
            var county=$("#county").val();
            var email=$("#email").val();
            var password=$("#pass").val();
            var conf=$("#pass2").val();

            //check if they are empty
            if(firstname===""){
                $("#err").slideDown().html("<span id='err'>Please Type Name</span>");
                return false;
            }
            if(lastname===""){
                $("#err").slideDown().html("<span id='err'>Please Type Lastname</span>");
                return false;
            }
            if(users===""){
                $("#err").slideDown().html("<span id='err'>Please Type username</span>");
                return false;
            }
            if(status===""){
                $("#err").slideDown().html("<span id='err'>Please select status</span>");
                return false;
            }
            
            if(county===""){
                $("#err").slideDown().html("<span id='err'>Please specify your County</span>");
                return false;
            }
            if(location===""){
                $("#err").slideDown().html("<span id='err'>Please specify your Location</span>");
                return false;
            }
            if(email===""){
                $("#err").slideDown().html("<span id='err'>Please enter your email address</span>");
                return false;
            }
            if(password===""){
                $("#err").slideDown().html("<span id='err'>Please Enter Your Password</span>");
                return false;
            }if(password.length<6){
                $("#err").slideDown().html("<span id='err'>Your Password Should be AT LEAST Six characters</span>");
                return false;
            }
            if(password !==conf){
                $("#err").slideDown().html("<span id='err'>Your Passwords DO NOT MATCH</span>");
                return false;
            }
            else{
                $.ajax({
                    type:'post',
                    data:$("#regform").serialize(),
                    dataType:'text',
                    url:'http://www.myfarm.com.yashcomm.com/farm/php/register.php',
                    success:function(data){
                        if(data==="success"){
                             window.location.href='login.html';
                         }else{
                         $("#err").slideDown().html(data);
                     }
            }
        });
    }       
});
});   
    
