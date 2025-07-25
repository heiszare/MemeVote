<?php
class jsonReader{
    private string $file_path;
    public function __construct(string $json_f_path){
        $this->file_path='./json/'.$json_f_path.'.json';
    }
    public function read_json():array{
        if(!file_exists($this->file_path)){
            throw new Exception('file not found'.$this->file_path);
        }
        $jsonContent=file_get_contents($this->file_path);
        $data=json_decode($jsonContent,true);
        if(json_last_error()!==JSON_ERROR_NONE){
            throw new Exception("json decode error.");
        }
        return $data;
    }
}
?>